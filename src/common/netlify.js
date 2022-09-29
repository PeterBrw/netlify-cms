import CMS from 'netlify-cms-app';
import '../styles/global.css';

const joinClasses = (arr) => arr.join(' ');

CMS.registerEditorComponent({
    label: 'Image',
    id: 'image',
    fromBlock: (match) =>
        match && {
            image: match[1],
            alt: match[2],
            title: match[3],
            classes: match[4],
            width: match[5],
            height: match[6]
        },
    toBlock: function ({ image, alt, title, classes, width, height }, getAsset, fields) {
        console.log(classes);
        const formattedClasses = joinClasses(classes || []);
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="some-class ${
            formattedClasses || '' || ''
        }" style="width:${width || ''}rem;height:${height || ''}rem;"/>`;
    },
    toPreview: ({ image, alt, title, classes, width, height }, getAsset, fields) => {
        const formattedClassesPreview = [];
        const availableClasses = ['shadows', 'h-48', 'w-96', 'rounded-lg', 'mx-auto'];

        availableClasses.map((item) => {
            if (classes.includes(item)) {
                formattedClassesPreview.push(item);
            }
        });

        return `<img src="${image}" alt="${alt}" title="${title}" class="some-class ${joinClasses(
            formattedClassesPreview
        )}" style="width:${width}rem;height:${height}rem;"/>`;
    },

    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)" style="width:(.*?)rem;height:(.*?)rem;"\/>$/s,
    fields: [
        {
            label: 'Picture',
            name: 'image',
            widget: 'image',
            media_library: {
                allow_multiple: true
            }
        },
        {
            label: 'Alt Text',
            name: 'alt'
        },
        {
            label: 'CSS Classes',
            name: 'classes',
            widget: 'select',
            multiple: true,
            default: ['shadows'],
            options: ['shadows', 'h-48', 'w-96', 'rounded-lg', 'mx-auto']
        },
        {
            label: 'Title',
            name: 'title'
        },
        {
            label: 'Width',
            name: 'width',
            widget: 'number',
            value_type: 'int'
        },
        {
            label: 'Height',
            name: 'height',
            widget: 'number',
            value_type: 'int'
        }
    ]
});
