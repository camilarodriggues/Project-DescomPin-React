const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${
        (Math.floor(Math.random() * 100_000)).toString}`
};

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
};

export const getFolders = async () => {
   return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async (folderName) => {

       const folders = await getFolders();

       const newFolder = {
            id: generateId(),
            name: folderName,
            pins: []
        };

        folders.push(newFolder);


         await saveFolder(folders);

        return newFolder;
}

export const savePinInFolder = async (folderId, pinId) => {
    const folders = await getFolders();

 const folderIndex = folders.findIndex(function(folder){
    return folder.id === folderId;
    });

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);
    return {...folders[folderIndex]};
}