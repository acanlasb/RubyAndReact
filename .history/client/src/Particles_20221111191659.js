import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {loadFull} from "tsparticles";
import {useMemo} from "react";
const ParticlesComponent = () => {
          const options = useMemo (()=>{
                    return {};
          }, []);
          const particlesInit = useCallback (()=>{
                    loadSlim(engine);
                    // loadFull(engine);
          }, []);
          return <Particles init={particlesInit} options={options}/>

};

export default ParticlesComponent;
