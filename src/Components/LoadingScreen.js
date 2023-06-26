import { useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({loaded}) => {
  console.log("loadingscreen " + loaded)

  useEffect(() => {
    // 여기에서 필요한 작업을 수행한 후에 setLoading(false)를 호출하여 로딩이 완료되었음을 알립니다.
    // 예를 들면, 데이터 로딩이 완료되었을 때 setLoading(false)를 호출할 수 있습니다.
  }, []);

  return (
    // <div className={`loading-screen ${loaded ? 'fade-out' : ''}`}>
    <div className={`loading-screen fade-out`}>
      {loaded ? <p>!!!!!!!Loading......</p> : null}
      {/* 로딩이 완료되었을 때 보여줄 컨텐츠를 여기에 추가할 수 있습니다. */}
    </div>
  );
};

export default LoadingScreen;