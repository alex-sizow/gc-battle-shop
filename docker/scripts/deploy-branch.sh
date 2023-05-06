#!/usr/bin/env bash

#Deploy to server
cd ../
ssh deployer@${PROD_DEPLOY_SERVER_IP} "
docker login -u ${CI_REGISTRY_USER} -p ${CI_JOB_TOKEN} ${CI_REGISTRY} && \
docker pull ${CI_REGISTRY_IMAGE}:${CI_PIPELINE_IID} && \
docker stop ${CI_PROJECT_PATH_SLUG}-${CI_COMMIT_REF_NAME} || true && \
docker rm ${CI_PROJECT_PATH_SLUG}-${CI_COMMIT_REF_NAME} || true && \


docker run -d \
--net=goldcarrot \
--name=${CI_PROJECT_PATH_SLUG}-${CI_COMMIT_REF_NAME} \
--restart=always \
-v ${CI_PROJECT_PATH_SLUG}-${CI_COMMIT_REF_NAME}-php:/var/run/php:rw \
-w /var/www/application \
-e API_URL=https://${CI_COMMIT_REF_NAME}-${LINKED_PROJECT_PATH_SLUG}.devgc.ru \
-e VIRTUAL_HOST=${CI_COMMIT_REF_NAME}-${CI_PROJECT_PATH_SLUG}.devgc.ru \
-e LETSENCRYPT_HOST=${CI_COMMIT_REF_NAME}-${CI_PROJECT_PATH_SLUG}.devgc.ru \
-e VIRTUAL_PORT=3000 \
-e NUXT_HOST=0.0.0.0 \
-e APACHE_DOCUMENT_ROOT=/var/www/application/public \
${CI_REGISTRY_IMAGE}:${CI_PIPELINE_IID}"
