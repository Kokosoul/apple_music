import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Nav from "components/Nav";
import TopAlbums from "components/TopAlbums";
import AlbumDetails from "components/TopAlbums/AlbumDetails";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        <div className='App'>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Redirect to='/wiki' />
            </Route>
            <Route exact path='/musics' component={TopAlbums} />
            <Route exact path='/musics/:id' component={AlbumDetails} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
