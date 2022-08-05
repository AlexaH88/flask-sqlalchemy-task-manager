document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collabsible initialisation
    let collabsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collabsible);
});