<script>
  export let post;
  import { posts } from "../stores";
  import dateView from "../utils/date";

  let postValue = {
    id: post.id,
    userEmail: post.userEmail,
    createdAt: post.createdAt,
    title: post.title,
    content: post.content,
    link: post.link,
    categoryName: post.categoryName,
  };

  const onCloseEditModePost = () => {
    posts.closeEditModePost();
  };

  const onUpdatePost = () => {
    let categoryName = postValue.categoryName;
    if (
      categoryName === undefined ||
      categoryName === "" ||
      categoryName === " "
    ) {
      postValue.categoryName = "no_category";
    }
    posts.updatePost(postValue);
  };
</script>

<!-- do-u-understand-content-edit-form start-->
<div class="do-u-understand-content-box">
  <div class="content-box-header">
    <div class="content-box-header-inner-left">
      <p class="p-user">{postValue.userEmail}</p>
      <p class="p-date">{dateView(postValue.createdAt)}</p>
    </div>
  </div>
  <div class="content-box-main-title">
    <textarea
      id="title"
      rows="1"
      class="do-u-understand-content-textarea"
      placeholder="제목을 입력해주세요."
      bind:value={postValue.title}
    ></textarea>
  </div>
  <div class="content-box-main">
    <textarea
      id="content"
      rows="5"
      class="do-u-understand-content-textarea"
      placeholder="내용을 입력해주세요."
      bind:value={postValue.content}
    ></textarea>
  </div>
  <div class="content-box-main-link">
    <textarea
      id="link"
      rows="1"
      class="do-u-understand-content-textarea"
      placeholder="링크를 입력해주세요."
      bind:value={postValue.link}
    ></textarea>
  </div>
  <div class="do-u-understand-content-textarea">
    <textarea
      id="link"
      rows="1"
      class="do-u-understand-content-textarea"
      placeholder="카테고리를 입력해주세요."
      bind:value={postValue.categoryName}
    ></textarea>
  </div>

  <div class="content-box-bottom">
    <div class="button-box">
      <button class="button-base" on:click={onUpdatePost}>완료</button>
      <button class="button-base" on:click={onCloseEditModePost}>취소</button>
    </div>
  </div>
</div>
<!-- do-u-understand-content-edit-form end-->
