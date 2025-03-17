'use strict';

import logger from "../utils/logger.js";
import playlistStore from '../models/playlist-store.js';
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Playlist App Dashboard",
      playlists: playlistStore.getAllPlaylists()
    };
    
    logger.debug(viewData.playlists);

    response.render('dashboard', viewData);
  },
  
  addPlaylist(request, response) {
    const newPlayList = {
      id: uuidv4(),
      title: request.body.title,
	    category: request.body.category,
      songs: [],
    };
    playlistStore.addPlaylist(newPlayList);
    response.redirect('/dashboard');
  },

};

export default dashboard;
