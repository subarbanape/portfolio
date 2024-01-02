export const getPathFromUrl = (index) => {
    if(index > 0 || index === 0)
    {
        // Trim leading slashes
        let path = window.location.pathname.replace(/^\/+/, '');
        // Trim trailing slashes
        path = path.replace(/\/+$/, '');
        const paths = path.split('/');
        if (paths.length > index) return (paths[index]).toLowerCase();
    }

    return window.location.pathname;
}

export const getRandom = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
};

export const getBreadCrumbDisplayName = (name) => {
    switch(name) {
        case 'more-projects' : return 'More Projects';
        case 'project' : return 'Project';
        case 'timeline' : return 'Timeline';
        default: return '';
    }
};

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
