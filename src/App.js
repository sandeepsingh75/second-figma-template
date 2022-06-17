import { Container } from '@mui/material';
import { Box } from '@mui/material';
import './App.css';
import Footer from './components/footer/Footer';
import Headerindex from './components/header';
import Header from './components/header/Header'
import BestNFTs from './components/main/BestNFT/BestNFTs';
import ClientList from './components/main/clientList/ClientList';
import ExploreCategory from './components/main/exploreByCategory/ExploreCategory';
import LiveAuctions from './components/main/liveauctions/LiveAuctions';
import NFTDrop from './components/main/NFTDrop/NFTDrop';
import Collection from './components/main/popularCollection/Collection';
import WorkProcess from './components/main/workingProcess/WorkProcess';
import TopCreators from './components/TopCreators/TopCreators';
 
function App() {
  return (
    <Container sx={{background:'#1C121F'}} maxWidth='xl'>
      <Headerindex />
    {/* <Header /> */}
    <BestNFTs />
    <ClientList />
    <LiveAuctions />
    <WorkProcess />
    <Collection />
    <ExploreCategory />
    <TopCreators />
    <NFTDrop />
    <Footer />

    </Container>
  );
}

export default App;
