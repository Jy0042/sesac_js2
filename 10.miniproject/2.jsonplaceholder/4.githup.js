import axios from "axios";
import "dotenv/config";

const username = "Jy0042";
const url = `https://api.github.com/users/${username}/repos`;
const token = process.env.GITHUB_TOKEN;

// axios.get(url).then((response) => {
//   console.log("내 리포 정보: ", response.data);
// });

const fetchGithub = async () => {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    if (response.status === 200) {
      // console.log("내 리포정보: ", response.data);
      // 나의 리포 목록만 출력하기
      const repos = response.data;
      repos.forEach((repo) => {
        console.log(`리포명: ${repo.name}, 스타수: ${repo.stargazers_count}`);
      });

      // 스타가 많은 리포순으로 소팅
      const topStarredRepo = repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);

      console.log("==== 스타수가 많은 리포 top5 ====");
      topStarredRepo.forEach((repo) => {
        console.log(`리포명: ${repo.name}, 스타수: ${repo.stargazers_count}`);
      });

      // 최근에  업데이트 된 리포
      // 최근 한달 이내 업데이트가 이루어진 리포들을 출력
      let oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

      const recentlyUpdatedRepo = repos.filter((repo) => {
        const updateAt = new Date(repo.updated_at);
        return updateAt >= oneMonthAgo;
      });

      console.log("=== 최근 한달이내 업데이트 된 리포 ===");
      recentlyUpdatedRepo.forEach((repo) => {
        // 한국 시간으로 변경
        const krTime = new Date(repo.updated_at).toLocaleString("ko-KR", {
          timeZone: "Asia/Seoul",
        });

        console.log(`리포명: ${repo.name}, 업데이트 날짜: ${krTime}`);
      });

      // const updateRepo = repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      // console.log("가장 최근 업데이트된 리포지토리:");
      // updateRepo.slice(0, 5).forEach((repo) => {
      //   console.log(`리포명: ${repo.name}, 업데이트 날짜: ${repo.updated_at}`);
      // });
    } else {
      console.log("에러: ", response.status);
    }
  } catch (error) {
    console.error("error fetching: ", error.message);
  }
};

fetchGithub();
