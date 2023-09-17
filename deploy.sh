#!/bin/sh

if [ $# -lt 2 ]; then
  echo "引数が不足しています。ホスティング先のS3バケット名とawsプロファイル名を指定してください。"
  exit 1
fi

S3_BUCKET_NAME="$1"
AWS_PROFILE_NAME="$2"

npm run build
aws s3 sync ./out "s3://$S3_BUCKET_NAME" --delete --profile "$AWS_PROFILE_NAME" --exclude .DS_Store