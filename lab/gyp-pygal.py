import pygal                                                       # First import pygal
bar_chart = pygal.Bar()   
bar_chart.title = "Remarquable sequences"
bar_chart.x_labels = map(str, range(11))                                         # Then create a bar graph object
bar_chart.add('Fibonacci', [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])  # Add some values
bar_chart.add('Padovan', [1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12])
bar_chart.render_to_file('bar_chart.svg')                          # Save the svg to a file