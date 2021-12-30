import styled from 'styled-components';

export const Container = styled.div`
  background: #c72828;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #41c900;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;

export const styleSheet = {
  heading: {
    margin: 'auto',
    // textAlign: 'center'
  },
  m20: {
    marginTop:20
  },
  ma: {
    margin: 'auto'
  },
  margin: {
    margin: 'auto',
    marginTop: 50
  },
  elevate: {
    margin: 'auto',
    zIndex: 1
  },
  fullWidth: {
    maxWidth: '100%'
  },
  jumb: {
    // position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}