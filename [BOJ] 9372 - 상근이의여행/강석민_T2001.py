from sys import stdin
rl = stdin.readline
for _ in range(int(rl())):
    n, m = map(int, rl().split())
    [rl() for _ in range(m)]
    print(n-1)
# 상근아, 코로나 조심하고...
