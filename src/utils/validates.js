import * as yup from "yup";

export const extractErrors = (error) => {
  return error.inner.reduce((acc, error) => {
    return { ...acc, [error.path]: error.message };
  }, {});
};

export const contentValidate = yup.object().shape({
  formContent: yup.string().required("내용을 입력해주세요.").label("내용"),
});

export const emailValidate = yup.object().shape({
  formRefreshPwdEmail: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 잘못되었습니다.")
    .label("이메일"),
});

export const loginValidate = yup.object().shape({
  formEmail: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 잘못되었습니다.")
    .label("이메일"),
  formPassword: yup
    .string()
    .required("패스워드를 입력해주세요.")
    .label("패스워드"),
});

export const registerValidate = yup.object().shape({
  formEmail: yup
    .string()
    .required("이메일을 입력해주세요.")
    .email("이메일 형식이 다릅니다."),
  formPassword: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      "영문 숫자 특수문자 조합 8자리 이상으로 입력해주세요."
    )
    .required("패스워드를 입력해주세요."),
  formPasswordConfirm: yup
    .string()
    .required("패스워드확인을 입력해주세요.")
    .oneOf(
      [yup.ref("formPassword"), null],
      "패스워드와 패스워드확인이 일치하지 않습니다."
    )
    .label("패스워드 확인"),
  formCode: yup
    .string()
    .required("인증코드를 입력해주세요.")
    .label("인증코드 확인"),
});

export const updatePasswordValidate = yup.object().shape({
  formPassword: yup
    .string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/,
      "영문 숫자 특수문자 조합 8자리 이상으로 입력해주세요."
    )
    .required("패스워드를 입력해주세요."),
  formPasswordConfirm: yup
    .string()
    .required("패스워드확인을 입력해주세요.")
    .oneOf(
      [yup.ref("formPassword"), null],
      "패스워드와 패스워드확인이 일치하지 않습니다."
    )
    .label("패스워드 확인"),
});
