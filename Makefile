VER = 1.0.0
TRDEV = granatumx/taskrunner-dev:$(VER)
TRRUN = granatumx/taskrunner-run:$(VER)
main:
	yarn install
	yarn build
docker: 
	docker build -f Dockerfile.dev -t $(TRDEV) .
	docker create --name taskrunnerInstall $(TRDEV)
	docker cp taskrunnerInstall:/usr/src/gx/taskrunner .
	docker rm -f taskrunnerInstall
	docker build -f Dockerfile.run -t $(TRRUN) .
	rm -rf taskrunner 
docker-push:
	docker push $(TRDEV)
	docker push $(TRRUN)
shell:
	docker run -v /var/run/docker.sock:/var/run/docker.sock --network=host --rm -it $(TRRUN) bash
doc:
	./gendoc.sh
