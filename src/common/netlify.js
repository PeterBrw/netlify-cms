import CMS from 'netlify-cms-app';


CMS.registerEditorComponent({
    label: 'Image',
    id: 'image',
    fromBlock: (match) =>
        match && {
            image: match[1],
            alt: match[2],
            title: match[3],
            classes: match[4]
        },
    toBlock: function ({ image, alt, title, classes }, getAsset, fields) {
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${classes || ''}"/>`;
    },
    toPreview: ({ image, alt, title, classes }, getAsset, fields) => {
        return `<img src="${image}" alt="${alt}" title="${title}" class="${classes}"/>`;
    },
    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)"\/>$/s,
    fields: [
        {
            label: 'Picture',
            name: 'image',
            widget: 'image',
            media_library: {
                allow_multiple: false
            }
        },
        {
            label: 'Alt Text',
            name: 'alt'
        },
        {
            label: 'CSS Classes',
            name: 'classes'
        },
        {
            label: 'Title',
            name: 'title'
        }
    ]
});