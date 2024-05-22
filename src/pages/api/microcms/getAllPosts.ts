/*
microCMSのAPIからブログ記事を全件取得する関数
*/
import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from '../../../lib/microcms';

type ImageUrl = {
  url: string;
  height: number;
  width: number;
};

type PostContent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  url: ImageUrl;
};

type PostRes = {
  contents: PostContent[];
  totalCount: number;
  offset: number;
  limit: number;
};

export const getAllPosts = async (
  queries: MicroCMSQueries
): Promise<PostRes> => {
  return await client
    .get({
      endpoint: import.meta.env.ENDPOINT,
      queries,
    })
    .then((res) => {
      // console.log(res, "<<< response all data");
      return res;
    })
    .catch((err) => console.error(err));
};
