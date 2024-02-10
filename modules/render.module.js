import { renderPlaylist } from './renders/renderPlaylist.module.js';

const playlistsWrapper = document.querySelector('.playlistsWrapper')

export function renderPlaylists(playlistsArray) {

	playlistsArray.forEach(playlist => {
		playlistsWrapper.append(renderPlaylist(playlist))
	});

}


