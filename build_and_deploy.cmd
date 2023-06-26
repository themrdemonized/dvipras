set IMAGE_NAME=ttt/site_kira_dvipras


set IMAGE_VERSION=%IMAGE_NAME%:%1
set IMAGE_LATEST=%IMAGE_NAME%:latest

docker build -t %IMAGE_VERSION% .  --network host --build-arg GITHUB_TOKEN=test_token
docker build -t %IMAGE_LATEST% .  --network host --build-arg GITHUB_TOKEN=test_token

docker login ttt --username test --password dud

docker push %IMAGE_VERSION%
docker push %IMAGE_LATEST%
