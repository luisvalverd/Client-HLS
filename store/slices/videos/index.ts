import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


//const SERVER_HOST = <any>process.env.SERVER_HOST;
//const SERVER_PORT = <any>process.env.SERVER_PORT;

//TODO: use environment variables 

var URI = `http://localhost:8000`;

export const fetchAllVideos: any = createAsyncThunk("videos/fetchAllVideos",
  async (page: string) => {
    try {

      if (!page) {
        page = "1";
      }

      const response = await axios.get(URI + `/all-videos?page=${page}`);
      return { ...response.data };
    } catch (error: any) {
      return error.message;
    }
  });

interface FindVideosData {
  name?: string;
  page: string;
}

export const fetchFindVideos: any = createAsyncThunk("videos/fetchFindVideos",
  async (data: FindVideosData) => {
    try {

      if (!data.page) {
        data.page = "1";
      }


      const response = await axios.post(URI + `/videos?page=${data.page}`, {
        search_value: data.name
      })
      return { ...response.data };
    } catch (error: any) {
      return error.message;
    }
  })

interface VideoState {
  entities: [];
  loading: 'idle' | 'pending' | 'successfull' | 'failed' | 'fulfilled'
  actualPage: number;
  totalPage: number;
  search_value?: string;
}

const initialState = {
  entities: [],
  loading: 'idle',
  totalPage: 1,
  actualPage: 1,
  search_value: ""
} as VideoState


export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideosList: (state, action) => {
      state.entities = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllVideos.pending, (state, action) => {
        if (state.loading === 'idle' || state.loading === 'fulfilled') {
          state.loading = 'pending';
          state.entities = [];
        }
      })
      .addCase(fetchAllVideos.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'fulfilled';
          state.entities = action.payload.videos;
          state.actualPage = action.payload.actualPage;
          state.totalPage = action.payload.totalPage;
        }
      })
      .addCase(fetchFindVideos.pending, (state, action) => {
        if (state.loading === 'idle' || state.loading === 'fulfilled') {
          state.loading = 'pending';
          state.entities = [];
        }
      })
      .addCase(fetchFindVideos.fulfilled, (state, action) => {
        if (state.loading === 'pending') {
          state.loading = 'idle';
          state.entities = action.payload.videos;
          state.totalPage = action.payload.totalPages;
          state.actualPage = action.payload.actualPage;
          state.search_value = action.payload.search_value;
        }
      })
  }
})

export const { setVideosList } = videoSlice.actions;

export default videoSlice.reducer;


