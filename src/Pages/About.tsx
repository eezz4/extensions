import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    fetch("https://api.github.com/users/octocat").then(console.log);
    // 해당 도메인에서 실행해도 cors 걸림
    fetch("https://www.naver.com").then(console.log);
  }, []);

  return <>About</>;
};
