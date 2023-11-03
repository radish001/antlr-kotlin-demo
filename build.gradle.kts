plugins {
    kotlin("multiplatform") version "1.7.21"
    //id("kotlin2js") version "1.3.21"

}

val antlr_kotlin_version = "0.0.1"

buildscript {
    val antlr_kotlin_version = "0.0.1"
    dependencies {
        // add the plugin to the classpath
        classpath("com.github.radish001.antlr-kotlin:antlr-kotlin-gradle-plugin:$antlr_kotlin_version")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.7.21")
    }
}


group = "me.goal"
version = "1.0-SNAPSHOT"

repositories {
    mavenLocal()
    jcenter()
    maven {
        setUrl("https://jitpack.io")
    }

    maven {
        setUrl("https://maven.aliyun.com/repository/public")
    }
    maven {
        setUrl("https://maven.aliyun.com/repository/central")
    }
    maven {
        setUrl("https://maven.aliyun.com/repository/gradle-plugin")
    }
    maven {
        setUrl("https://plugins.gradle.org/m2/")
    }
    mavenCentral()
}

kotlin {
    jvm {
       compilations.all {
            kotlinOptions.jvmTarget = "1.8"
        }
        withJava()
        testRuns["test"].executionTask.configure {
            useJUnitPlatform()
        }
    }
    js(BOTH) {
        //binaries.executable()
        browser {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }
        nodejs {
            testTask {
                useMocha {
                    timeout = "10s"
                }
            }
        }

    }



    sourceSets {
        val commonAntlr by creating {
            dependencies {
                //implementation(kotlin("collections"))
                //implementation(kotlin("reflect"))
                implementation(kotlin("stdlib"))
                api("com.github.radish001.antlr-kotlin:antlr-kotlin-runtime:$antlr_kotlin_version")

            }
            //kotlin.srcDir("build/generated-src/commonAntlr/kotlin")
        }

        val commonMain by getting {
            dependsOn(commonAntlr)

        }
        val commonTest by getting {

            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jvmMain by getting {
            dependencies {
                api(kotlin("stdlib-jdk8"))
                api(kotlin("reflect"))
                implementation("joda-time:joda-time:2.12.5")
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jsMain by getting {
            dependsOn(commonAntlr)
            dependencies {
                implementation(npm("base-64", "1.0.0"))
                implementation("com.github.radish001.antlr-kotlin:antlr-kotlin-runtime-js:$antlr_kotlin_version")
                implementation(kotlin("stdlib-js"))
                implementation(npm("bignumber.js", "9.1.2"))
                implementation(npm("dayjs", "1.11.10"))
                implementation(npm("javascript-implementation-of-java.util.treemap-class-master", "1.0.0"))

            }
        }
        val jsTest by getting
    }
}

tasks.register<com.strumenta.antlrkotlin.gradleplugin.AntlrKotlinTask>("generateKotlinCommonGrammarSource") {

    antlrClasspath = configurations.detachedConfiguration(
        project.dependencies.create("com.github.radish001.antlr-kotlin:antlr-kotlin-target:$antlr_kotlin_version")

    )
    maxHeapSize = "1024m"
    packageName = "com.strumenta.antlrkotlin.examples"
    arguments = listOf("-visitor", "-listener")
    source = project.objects
        .sourceDirectorySet("antlr", "antlr")
        .srcDir("src/commonAntlr/resources").apply {
            include("*.g4")
        }

    outputDirectory = File("build/generated-src/commonAntlr/kotlin")

}


/*tasks.get("allTests").enabled = false
tasks.get("check").enabled = false
tasks.get("jsBrowserTest").enabled = false
tasks.get("jsNodeTest").enabled = false
tasks.get("jsTest").enabled = false
tasks.get("jvmTest").enabled = false
tasks.get("test").enabled = false*/






