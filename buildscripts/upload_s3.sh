#!/bin/bash
echo "Uploading to s3"
aws s3 sync public/ s3://harleythorne.com --delete --aws-access-key $1 --aws-secret-key $2