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
            classes: match[4]
        },
    toBlock: function ({ image, alt, title, classes }, getAsset, fields) {
        console.log(classes);
        const formattedClasses = joinClasses(classes || []);
        return `<img src="${image || ''}" alt="${alt || ''}" title="${title || ''}" class="${
            formattedClasses || '' || ''
        }"/>`;
    },
    toPreview: ({ image, alt, title, classes }, getAsset, fields) => {
        const formattedClassesPreview = [];
        const availableClasses = ['shadows', 'h-48', 'w-96', 'rounded-lg', 'mx-auto'];

        availableClasses.map((item) => {
            if (classes.includes(item)) {
                formattedClassesPreview.push(item);
            }
        });

        return `<img src="${image}" alt="${alt}" title="${title}" class="${joinClasses(formattedClassesPreview)}"/>`;
    },

    pattern: /^<img src="(.*?)" alt="(.*?)" title="(.*?)" class="(.*?)"\/>$/s,
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
        }
    ]
});
