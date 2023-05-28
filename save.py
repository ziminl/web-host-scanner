import subprocess 

file1 = open('ip.txt', 'r')
Lines = file1.readlines()
 
count = 0


from multiprocess import Process, Queue

def f(q):
    q.put('hello world')
    for line in Lines:


        a = "ping -a " + line
        output = subprocess.getoutput(a)
        ll = "["+ line
        print_out = (output.split("Ping ", 1)[1].split(ll, 1)[0])
        print(print_out)
        with open('saved.txt', 'w', encoding='utf-8') as f:
                f.write(print_out + line)

if __name__ == '__main__':
    q = Queue()
    p = Process(target=f, args=[q])
    p.start()
    print (q.get())
    p.join()


