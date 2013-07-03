$(function() {
	var $table = $('table').hide();
	var $thead = $('table thead tr');
	var $tbody = $('table tbody');

	$.getJSON('https://dl.dropboxusercontent.com/u/682947/gym.json', function(data) {
		var definition = data.definition;
		var excercises = data.excercises;

		$.each(definition, function(key, val) {
			$thead.append('<th>'+ val +'</th>');
		});

		$.each(excercises, function(excerciseKey, excercise) {
			$tbody.append('<tr><th scope="row">'+ excerciseKey +'</th></tr>');

			$.each(definition, function(definitionKey, definitionVal) {
				var excerciseValue = excercise[definitionKey] || '-';
				var excerciseClass = excerciseValue == '-' ? 'not_available' : '';

				$tbody.find('tr:last').append('<td class="'+ excerciseClass +'">'+ excerciseValue +'</td>')
			});
		});

		$table.fadeIn();
	});
});