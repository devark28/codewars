def filter_list(l):
    return [*filter(lambda x: type(x) == int, l)]
