// An abortable timeout: example below.
// implementation
function abortableTimeout(timeout: number): AbortController {
    const abortController = new AbortController();
    let destroyed = false;
    const timer = setTimeout(() => {
        if(destroyed) return;
        clearTimeout(timer);
        destroyed = true;
        abortController.abort();
    }, timeout);
    abortController.signal.addEventListener('abort', () => {
        if(destroyed) return;
        clearTimeout(timer);
        destroyed = true;
    })
    return abortController;
}

// setTimeout = {...setTimeout, abortable};

// usage
const timeoutController = abortableTimeout(2000);
// timeoutController.abort();
fetch('https://jsonplaceholder.typicode.com/todos/1', { signal: timeoutController.signal })
    .then((r) => r.json())
    .then(console.log)
    .catch((e) => console.log(e.message));
