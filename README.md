> `taskrunner` is an image that provides shell scripts for automating GranatumX deployment




### Prerequisites

You mainly need a working copy of [Docker](http://docker.com). It is used
exclusively to manage system configurations for running numerous tools
across numerous platforms.

### Running

Taskrunner runs on the GranatumX server polling for tasks to do and executing them when required.
The setup is similar to `webapp`. It does require `/var/run/docker.sock` to be mounted so that it
can be a sibling process as it kicks off various gboxes according to user requests through the frontend.
Usually, each gbox is run as a docker image and data is moved back and forth. A volume is used to share
data as symlinks are used to connect downloaded data to data for processing.


```
$ gx runTaskrunner.sh
```

Stopping the taskrunner is accomplished by (running docker containers are named `gx-*`):

```
$ gx stopTaskrunner.sh
```

Errors that occur via execution are available by:

```
$ errtaskrunner
```

### Building

First the dev environment is built. It uses nodejs which copies numerous dependencies to help build the
package. An executable is made with `pkg` and then copied into the run environment. The run environment
is subsequently built with a much smaller footprint.

