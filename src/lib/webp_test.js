function testWebP(callback)
{
    const webP = new Image();
    webP.onload = webP.onerror = function ()
                    {
                        callback(webP.height === 2);
                    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAg" +
                "CdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

function testWebPAndInjectWebPClass()
{
    testWebP(function (support)
    {
        const bodyClassList = document.querySelector('body').classList;
        if (support === true)
        {
            bodyClassList.add('webp');
        }
        else
        {
            bodyClassList.add('no-webp');
        }
    });
}

export default testWebPAndInjectWebPClass;