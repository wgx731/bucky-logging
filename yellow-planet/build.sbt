name := """yellow-planet"""
organization := "com.github.wgx731.bucky-logging"

version := "0.9.9"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.8"

libraryDependencies += filters
