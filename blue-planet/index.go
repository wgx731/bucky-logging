package main

import (
	"bytes"
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/golang/glog"
	"github.com/google/uuid"
)

const (
	host = "0.0.0.0:"
	port = "8081"
)

func blueHandler(w http.ResponseWriter, r *http.Request) {
	glog.Info("id: ", uuid.New(), " path: /blue")
    glog.Flush()
	fmt.Fprintf(w, "jenny-cat")
}

func errorHandler(w http.ResponseWriter, r *http.Request) {
	glog.Error("id: ", uuid.New(), " path: /error")
    glog.Flush()
	w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprintf(w, "error")
}

func init() {
	flag.Parse()
	var buf bytes.Buffer
	logger := log.New(&buf, "logger: ", log.Lshortfile)
	logger.Print("server run at ", port)
	fmt.Print(&buf)
	http.HandleFunc("/blue", blueHandler)
	http.HandleFunc("/error", errorHandler)
	http.ListenAndServe(host+port, nil)
}

func main() {}
