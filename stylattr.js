
try
{
    (new MutationObserver(function (mutations, observer)
    {
        for (const { addedNodes, attributeName, target } of mutations)
        {
            if (typeof attributeName === 'string' && attributeName.startsWith('-'))
            {
                let attr = target.getAttribute(attributeName);
                if (typeof attr === 'string')
                    target.style[ attributeName.substr(1) ] = attr;
                target.removeAttribute(attributeName);
            }
            for (const node of addedNodes)
            {
                if (!node.tagName) continue;
                if (node.tagName.toUpperCase())
                    for (let i = 0;i < node.attributes.length;i++)
                    {

                        if (node.attributes[ i ].name.startsWith('-'))
                        {
                            node.style[ node.attributes[ i ].name.substr(1) ] = node.attributes[ i ].value;
                            node.removeAttribute(node.attributes[ i ].name);
                        }
                    }
            }
        }
    })).observe(document, { attributes: true, childList: true, subtree: true });

} catch (e)
{
    console.error(e);
}