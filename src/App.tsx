import React, {useEffect} from 'react';
import './App.css';
import JobsBoard from "./components/jobs-board/jobs-board";
import {Routes, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import {appSlice} from "./store/reducers/appSlice";
import LoaderSpinner from "./components/loader-spinner/loader-spinner";
import ErrorMessage from "./components/error-message/error-message";
import JobDetailed from "./components/job-detailed/job-detailed";
import API from "./shared/utils/API";

function App() {
    const dispatch = useDispatch();

    const isLoading = useAppSelector(({isLoading}) => isLoading);
    const error = useAppSelector(({error}) => error);

    useEffect(() => {
        API.get('')
            .then(({data}) => {
                dispatch(appSlice.actions.getSuccess(data));
            })
            .catch(({message}) => dispatch(appSlice.actions.failed(message)));
    },[])
    return (
        <>
            {isLoading && <LoaderSpinner/>}
            {error && <ErrorMessage/>}
            <Routes>
                <Route path={'/'} element={<JobsBoard/>}/>
                <Route path={':id'} element={<JobDetailed/>}/>
            </Routes>
        </>
    );
}

export default App;
