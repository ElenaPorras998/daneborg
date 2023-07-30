<?php declare(strict_types=1);

namespace App\Controller;

use App\Entity\Booking;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Util\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class HomeController extends AbstractController
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * @Route("/")
     */
    public function index(): Response
    {
        $bookings = $this->entityManager->getRepository(Booking::class)->findAll();
        return $this->render('home.html.twig', [
            'bookings' => $bookings
        ]);
    }

    /**
     * @Route("/administration")
     */
    public function administration(Request $request, ValidatorInterface $validator): Response
    {
        $booking = new Booking();

        $form = $this->createFormBuilder($booking)
            ->add('startDate', DateType::class, ['widget' => 'single_text'])
            ->add('endDate', DateType::class, ['widget' => 'single_text'])
            ->add('name', TextType::class, )
            ->add('save', SubmitType::class, ['label' => 'Gem Booking'])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $booking = $form->getData();
            $this->entityManager->persist($booking);
            $this->entityManager->flush();

            unset($form);
            $entity = new Booking();
            $form = $this->createFormBuilder($entity)
                ->add('startDate', DateType::class, ['widget' => 'single_text'])
                ->add('endDate', DateType::class, ['widget' => 'single_text'])
                ->add('name', TextType::class)
                ->add('save', SubmitType::class, ['label' => 'Gem Booking'])
                ->getForm();
        }

        $query = $this->entityManager->getRepository(Booking::class)->createQueryBuilder('b')
            ->where('b.endDate > :endDate')
            ->orderBy('b.startDate', 'DESC')
            ->setParameter('endDate', new \DateTime())
            ->getQuery();

        return $this->render('admin.html.twig', [
            'form' => $form,
            'bookings' => $query->getResult()
        ]);
    }

    /**
     * @Route("/info")
     */
    public function info(Request $request): Response
    {
        return $this->render('info.html.twig');
    }


    /**
     * @Route("/delete/booking/{id}")
     */
    public function deleteBooking(Request $request)
    {
        $booking = $this->entityManager->getRepository(Booking::class)->find($request->get('id'));
        $this->entityManager->remove($booking);
        $this->entityManager->flush();
        return new Response('Booking deleted');
    }
}