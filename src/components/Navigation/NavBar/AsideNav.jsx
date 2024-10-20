import { LifeBuoy, Settings, Film } from "lucide-react";
import Sidebar, { SidebarItem } from "./Sidebar";
import { useLocation } from "react-router-dom";

const AsideNav = (props) => {
  const location = useLocation();
  console.log(props.movie);
  return (
    <>
      <div className="flex">
        <Sidebar>
          {props.movie ? (
            props.movie.scenes.map((scene, index) => (
              <SidebarItem
                key={index}
                icon={<Film size={20} />}
                text={scene.sceneName}
                location={
                  "/movies/" + props.movie.movieName + "/" + scene.sceneName
                }
              />
            ))
          ) : (
            <SidebarItem key={1} icon={<Film size={20} />} text={"Scenes"} />
          )}
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            location="/settings"
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            location="/help"
          />
        </Sidebar>
      </div>
    </>
  );
};

export default AsideNav;
