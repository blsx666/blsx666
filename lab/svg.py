import numpy as np 
import matplotlib.pyplot as plt 
path = 'C://Users//GYP_G//Documents//GitHub/'
fig=plt.figure()
ax=fig.add_subplot()
x1=np.linspace(0,10,50)
y1=(x1*x1)
ax.plot(x1,y1, label='y=x$^2$')
ax.legend()
fig.savefig(path+'gyp.svg', format='svg', dpi=250)