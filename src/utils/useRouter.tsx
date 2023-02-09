import { useNavigate, useLocation, Path } from "react-router";
export default function useRouter() {
  const navigate = useNavigate();
  const location = useLocation() as Path;
  const go = (url: string) => {
    navigate(url);
  };
  const getUrl = () => location;
  return {
    go, //跳转到指定的路由链接
    getUrl, //获得URL
  };
}
