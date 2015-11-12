//������ ��������� ������� �� input ������ ��  ������� �������

$('#search').keyup(function () {

// ���������� � ���������� ���������� ��������� �������������

    var search_user = $('#search').val();

    //��������� ��������� ���������� �� ��������� ����� � ������� �� ��� ������

    var search_user_array = search_user.split(' ');

    //����� �������� ������� �� ���������� � �������� �������� ���������������� � ��������

    var myExp_first = new RegExp(search_user_array[0], "i");
    var myExp_second = new RegExp(search_user_array[1], "i");
    var myExp_third = new RegExp(search_user_array[2], "i");

    //����� json ������

    $.getJSON('json/players.json', function (data) {

        //������� ���������� ��� ����������� ���������� � HTML ��������

        var output = '<ul class="search_results">';

        //���������� �������� � json

        $.each(data, function (key, val) {

//������ ������� ������ �� json

            if (((val.name.search(myExp_first) != -1) || (val.position.search(myExp_first) != -1) || (val.nationality.search(myExp_first) != -1)) && ((val.name.search(myExp_second) != -1) || (val.position.search(myExp_second) != -1) || (val.nationality.search(myExp_second) != -1)) && ((val.name.search(myExp_third) != -1) || (val.position.search(myExp_third) != -1) || (val.nationality.search(myExp_third) != -1))) {
                //��������� ���������� ��� ����������� ���������� � HTML �������� �� ����� � �������� json
                output += '<ul><li><img src="img/players/' + val.id + '.png" alt="' + val.name + '"></li>';

                output += '<li><h2>' + val.name + '</h2></li>';
                output += '<li>' + 'Position: ' + val.position + '</li>';
                output += '<li>' + 'Nationality: ' + val.nationality + '</li>';
                output += '<li>' + 'Number: ' + val.jerseyNumber + '</li>';
                output += '<li>' + 'Born: ' + val.dateOfBirth + '</li>';
                output += '<li>' + 'Contract to: ' + val.contractUntil + '</li>';
                output += '<li>' + 'Price: ' + val.marketValue + '</li>';

                output += '</ul>';
            }

        });
        output += '</ul>';

        //��������� �������� ���������� � HTML ��������

        $('#players').html(output);


    });
});