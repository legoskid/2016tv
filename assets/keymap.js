// Key remapping: intercept custom keycodes and re-dispatch as standard keycodes
(function () {
    var keyMap = {
        32782: 37, // Left arrow
        32780: 38, // Up arrow
        32783: 39, // Right arrow
        32781: 40, // Down arrow
        32768: 13  // Enter
    };

    function remapKeyEvent(e) {
        var mapped = keyMap[e.keyCode];
        if (mapped !== undefined) {
            e.stopImmediatePropagation();
            e.preventDefault();
            var newEvent = new KeyboardEvent(e.type, {
                bubbles: e.bubbles,
                cancelable: e.cancelable,
                key: e.key,
                code: e.code,
                shiftKey: e.shiftKey,
                ctrlKey: e.ctrlKey,
                altKey: e.altKey,
                metaKey: e.metaKey
            });
            Object.defineProperty(newEvent, 'keyCode', { value: mapped });
            Object.defineProperty(newEvent, 'which', { value: mapped });
            e.target.dispatchEvent(newEvent);
        }
    }

    document.addEventListener('keydown', remapKeyEvent, true);
    document.addEventListener('keyup', remapKeyEvent, true);
})();
