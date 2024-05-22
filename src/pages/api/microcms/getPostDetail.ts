/*
microCMSのAPIからブログ記事の詳細情報を取得する関数
*/
import type { MicroCMSQueries } from "microcms-js-sdk";
import { client } from '../../../lib/microcms';

export type PostDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
): Promise<PostDetail> => {
  return await client.get({
    endpoint: import.meta.env.ENDPOINT,
    contentId,
    queries
  })
  .then((res) => {
    // console.log(res, "<<< response detail data");
    return res;
  })
  .catch((err) => console.error(err));
};