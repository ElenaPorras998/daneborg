/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
//import './bootstrap';
import flatpickr from "flatpickr";
import { Danish } from "flatpickr/dist/l10n/da.js";
require("fslightbox");
require("flatpickr/dist/themes/Airbnb.css");

window.initCalendar = () => {
    flatpickr("#calendar", {
        inline: true,
        dateFormat: "d-m-Y",
        weekNumbers: true,
        locale: Danish,
        disable: window.DisabledDates
    });
}

window.initAdminCalendar = () => {
    flatpickr("#admin-calendar", {
        inline: true,
        dateFormat: "d-m-Y",
        locale: Danish,
        weekNumbers: true,
        mode: "range",
        disable: window.DisabledDates,
        onChange: function(selectedDates) {
            window.selectedDates = selectedDates;
        }
    });
}