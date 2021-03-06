import styled from 'styled-components';
import bgImg from '../assets/bg-profile.jpg';
import SocialMedia from './SocialMedia';

function App() {
   return (
      <Container>
         <Header>
            <img src={bgImg} alt='bg profile' />
            <SocialMedia />
         </Header>

         <Info>
            <Wrapper>
               <h1>Hello!</h1>
               <p>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est reprehenderit voluptatibus nulla facere eligendi inventore ratione commodi, doloribus culpa dicta mollitia nostrum nam facilis cumque odio illum quis voluptatum, molestiae aliquid ipsa perspiciatis. Molestiae provident cumque cupiditate natus nihil. Officiis veniam eligendi possimus eos maiores dignissimos velit modi sed tenetur cumque nobis quis id, deserunt quae eum ducimus ad.
             </p>
               <br/>
               <br/>
                  <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est reprehenderit voluptatibus nulla facere eligendi inventore ratione commodi,</p>
               <br/>
               <br/>
              <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita est reprehenderit voluptatibus nulla facere eligendi inventore ratione commodi,molestiae aliquid ipsa perspiciatis. Molestiae provident cumque cupiditate natus nihil.</p>
            </Wrapper>
         </Info>
      </Container>
   );
}

const Header = styled.header`
   width: 100vw;
   height: 70vh;
   overflow: hidden;
   position: relative;
   > img {
      width: 100%;
      height: 130%;
      object-fit: cover;
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      @media (max-width: 450px) {
         height: 100%;
      }
   }
`;
const Container = styled.div`
overflow: hidden;
`;
const Wrapper = styled.div`
   width: 700px;
   max-width: 90%;
   margin: 40px auto;

   h1 {
      font-size: 36px;
      letter-spacing: 1.25px;
      @media (min-width: 450px){
      font-size: 56px;

      }
   }
   p{
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 1.25px;
   }
`;
const Info = styled.main`
   width: 100vw;
   samp {
      color: var(--yellow);
      font-weight: 700;
      cursor: pointer;
      transition: all 300ms ease-in-out;
      &:hover {
         color: var(--black);
      }
   }
`;
export default App;
