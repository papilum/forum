import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import { Link } from 'react-router-dom';

const PostsTable = ({ posts }) => {
  const data = {
    columns: [
      {
        label: 'Naslov',
        field: 'naslov',
        width: 200,
      },
      {
        label: 'Sadržaj',
        field: 'sadrzaj',
        width: 400,
      },
      {
        label: 'Autor',
        field: 'autor',
        width: 150,
      },
      {
        label: 'Update',
        field: 'update',
        width: 100,
        sort: 'disabled',
      },
    ],
    rows: posts.map((post) => ({
      naslov: post.title,
      sadrzaj: post.content,
      autor: post.user.name,
      update: (
        <Link to={`/posts/${post.id}`} className="btn-update">
          Update
        </Link>
      ),
    })),
  };

  return (
    <div className="tabelaPoruka">
      <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={data} />
    </div>
  );
};

export default PostsTable;
