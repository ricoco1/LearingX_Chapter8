$(document).ready(function() {
    get_people();
});

function get_people() {
    let url = 'https://my-json-server.typicode.com/jjjosephhh/test-db-002/people';

    $.ajax({
        type: "GET",
        url: url,
        data: {},
        success: function(response) {
            var table = '<table class="table table-striped mt-3">';
            table += '<thead>';
            table += '<tr>';
            table += '<th scope="col">First Name</th>';
            table += '<th scope="col">Last Name</th>';
            table += '<th scope="col">Age</th>';
            table += '</tr>';
            table += '</thead>';
            table += '<tbody>';
            for (var i = 0; i < response.length; i++) {
                table += '<tr>';
                table += '<td>' + response[i].fname + '</td>';
                table += '<td>' + response[i].lname + '</td>';
                table += '<td>' + response[i].age + '</td>';
                table += '</tr>';
            }
            table += '</tbody></table>';
            $('#peopleTable').html(table);
        },
    });
}

function toJobsPage() {
    window.location.href = '/jobs';
}
function toHomePage() {
    window.location.href = '/';
}