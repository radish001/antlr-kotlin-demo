plugins {
    kotlin("multiplatform") version "1.7.21"
    //id("kotlin2js") version "1.3.21"

}

val antlr_kotlin_version = "master-SNAPSHOT"


buildscript {
    val antlr_kotlin_version = "master-SNAPSHOT"
    dependencies {
        // add the plugin to the classpath
        classpath("com.strumenta.antlr-kotlin:antlr-kotlin-gradle-plugin:$antlr_kotlin_version")
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
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                // cssSupport.enabled = true
            }
        }
        nodejs {

        }

    }



    sourceSets {
        val commonAntlr by creating {
            dependencies {
                api(kotlin("stdlib-common"))
                api("com.strumenta.antlr-kotlin:antlr-kotlin-runtime:$antlr_kotlin_version")

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
            }
        }
        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(npm("base-64", "1.0.0"))
                implementation("com.strumenta.antlr-kotlin:antlr-kotlin-runtime-js:$antlr_kotlin_version")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-common:1.7.21")
                implementation("org.jetbrains.kotlin:kotlin-stdlib-js:1.7.21")
            }
        }
        val jsTest by getting
    }
}

tasks.register<com.strumenta.antlrkotlin.gradleplugin.AntlrKotlinTask>("generateKotlinCommonGrammarSource") {

    antlrClasspath = configurations.detachedConfiguration(
        project.dependencies.create("com.strumenta.antlr-kotlin:antlr-kotlin-target:$antlr_kotlin_version")
    )
    maxHeapSize = "1024m"
    packageName = "com.strumenta.antlrkotlin.examples"
    //arguments = listOf("-no-visitor", "-no-listener")
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






