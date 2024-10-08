export const HttpStatusMessage = new Map([
  ['ErruserNotFound', 'User not found'],
  ['ErrEmailOrPasswordInvalid', 'email or password is invalid'],
  ['ErrEmailNotVerified', 'Your email is not verified'],
  ['ErrEmailExisted', 'Email already exists'],
  ['ErrEmailVerified', 'Email has been verified'],
  ['ErrOldPasswordIsInvalid', 'Your password is incorrect'],
  ['ErrWaitingForANewLink', 'You need to wait one minute to send another one'],
  ['ErrPasswordRecoveryNotFound', 'Invalid Link'],
  ['ErrLinkHasBeenExpired', 'Link has been expired'],
  ['ErrQuantityExceed', 'The quantity you are trying to add exceed our store'],
  ['ErrInvalidRequest', 'Invalid Request'],
  ['ERR_NETWORK', 'Network Error'],
  ['ECONNABORTED', 'Connection Error'],

  //   ! Website Errors
  ['ErrWebsiteIsDeleted', 'Website is deleted'],
  ['ErrNameCannotBeEmpty', 'Website name cannot be empty'],
  ['ErrPathCannotBeEmpty', 'Website path cannot be empty'],
  ['ErrDefaultEmailCannotBeEmpty', 'Website default email cannot be empty'],
  ['ErrTimeIntervalInvalid', 'The time interval is too small'],
  ['ErrRetryInvalid', 'The number of retry is invalid'],

  ['ErrPathExisted', 'The website path is already existed'],
  ['ErrContactExisted', 'Contact is already existed'],
  ['ErrContactExceedLimit', 'Contact number is exceeding the limit'],
  ['ErrCheckTimeExisted', 'Check time is already existed'],
  ['ErrCheckTimeExceedLimit', 'Check time number is exceeding the limit']
])
