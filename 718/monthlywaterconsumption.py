import pygal
from pygal.style import DefaultStyle
bar_chart = pygal.Bar(print_values=True, style=DefaultStyle(
                  value_font_family='googlefont:Raleway',
                  value_font_size=12,
                  value_colors=('white',)),height=600,width=1200)                                                       
# bar_chart = pygal.Bar()  
bar_chart.title = "工艺耗水量，L/kg"
bar_chart.x_labels = '01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月',
bar_chart.add('前处理', [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],rounded_bars=10)                                          
bar_chart.add('染色', [59, 71, 61, 62, 63, 65, 68, 63, 61, 62, 66, 68],rounded_bars=10) 
bar_chart.add('后整理', [3, 5, 4, 4, 3, 3, 4, 3, 4, 3, 4, 5],rounded_bars=10)
bar_chart.add('总计', [72, 86, 75, 76, 76, 78, 82, 76, 75, 75, 80, 83],rounded_bars=10)  
# bar_chart.add('目标', [70, 70, 4, 4, 3, 3, 4, 3, 4, 3, 4, 5],rounded_bars=10) 
bar_chart.render_to_file('bar_chart.svg')  
# bar_chart.render_table(style=True, total=True, transpose=True)
# dot_chart = pygal.Dot(x_label_rotation=30)
# dot_chart.title = 'V8 benchmark results'
# dot_chart.x_labels = ['Richards', 'DeltaBlue', 'Crypto', 'RayTrace', 'EarleyBoyer', 'RegExp', 'Splay', 'NavierStokes']
# dot_chart.add('Chrome', [6395, 8212, 7520, 7218, 12464, 1660, 2123, 8607])
# dot_chart.add('Firefox', [7473, 8099, 11700, 2651, 6361, 1044, 3797, 9450])
# dot_chart.add('Opera', [3472, 2933, 4203, 5229, 5810, 1828, 9013, 4669])
# dot_chart.add('IE', [43, 41, 59, 79, 144, 136, 34, 102])
# dot_chart.render()
