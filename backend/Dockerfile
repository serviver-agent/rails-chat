FROM ruby:2.7.0-slim
ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

RUN gem install bundler

# https://github.com/cucumber/cucumber/issues/843#issuecomment-571459698
RUN rm -rf /usr/local/bundle/gems/google-protobuf-3.11.4-x86_64-linux/lib/google/2.7 && \
    ln -s /usr/local/bundle/gems/google-protobuf-3.11.4-x86_64-linux/lib/google/2.6 /usr/local/bundle/gems/google-protobuf-3.11.4-x86_64-linux/lib/google/2.7

WORKDIR /tmp
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install

ENV APP_HOME /myapp
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME
