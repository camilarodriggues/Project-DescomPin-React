import * as types from './types';
import * as pinService from '../Services/PinService';

export const openModalSavePinAction = () => ({
    type: 'types.openModalSavePinType'
});

export const closeModalsAction = () => ({
    type: 'types.closeModalsType'
});

export const fetchFoldersInitAction = () => ({
    type: 'types.fetchFoldersInitType'
});

export const fetchFolderSuccessAction = (folders) => ({
    type: 'types.fetchFoldersSuccessType',
    payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFolderSuccessAction(folders));

}