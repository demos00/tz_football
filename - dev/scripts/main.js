//Ставим прослушку события на input поиска по  нажатию клавиши

$('#search').keyup(function () {

// записываем в переменную информацию введенную пользователем

    var search_user = $('#search').val();

    //разбиваем введенную информацию на отдельные слова и создаем из них массив

    var search_user_array = search_user.split(' ');

    //делим значения массива на переменные и приводим значения нечуствительными к регистру

    var myExp_first = new RegExp(search_user_array[0], "i");
    var myExp_second = new RegExp(search_user_array[1], "i");
    var myExp_third = new RegExp(search_user_array[2], "i");

    //берем json объект

    $.getJSON('json/players.json', function (data) {

        //создаем переменную для дальнейшего добавления в HTML разметку

        var output = '<ul class="search_results">';

        //перебираем значения в json

        $.each(data, function (key, val) {

//задаем условия поиска по json

            if (((val.name.search(myExp_first) != -1) || (val.position.search(myExp_first) != -1) || (val.nationality.search(myExp_first) != -1)) && ((val.name.search(myExp_second) != -1) || (val.position.search(myExp_second) != -1) || (val.nationality.search(myExp_second) != -1)) && ((val.name.search(myExp_third) != -1) || (val.position.search(myExp_third) != -1) || (val.nationality.search(myExp_third) != -1))) {
                //формируем переменную для дальнейшего добавления в HTML разметку из тегов и значений json
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

        //добавляем значение переменной в HTML разметку

        $('#players').html(output);


    });
});